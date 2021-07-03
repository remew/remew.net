import { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import multer from 'multer';
import nextConnect from 'next-connect';

interface NextApiRequestWithFile extends NextApiRequest {
  file: Express.Multer.File;
}

const upload = multer({
  dest: 'tmp',
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
});

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

const handler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(upload.single('image'))
  .post<NextApiRequestWithFile, NextApiResponse>(async (req, res) => {
    res.status(200).json({
      message: 'ok',
      file: {
        destination: req.file.destination,
        path: req.file.path,
        fieldName: req.file.fieldname,
        fileName: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
        mimetype: req.file.mimetype,
      },
    });
  });

export default withApiAuthRequired(handler);

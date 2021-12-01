import { SideBlock } from './SideBlock';

type Props = {};
export const SideAd = ({}: Props) => {
  return (
    <SideBlock title={'広告欄'}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: 200, height: 200 }}
        data-ad-client="ca-pub-3738690345524161"
        data-ad-slot="7739332217"
        data-adtest="on"
      />
    </SideBlock>
  );
};

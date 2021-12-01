import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import twilight from 'react-syntax-highlighter/dist/esm/styles/prism/twilight';
import { CodeProps } from './MarkdownComponentProps';

export const Code = ({ inline, children, className }: CodeProps) => {
  if (inline) {
    return <InlineCode>{children}</InlineCode>;
  }
  const match = /language-(\w+)/.exec(className || '');
  const language = match?.[1] ?? 'text';

  return (
    <SyntaxHighlighter showLineNumbers={true} style={twilight} language={language} PreTag="div">
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};

export const InlineCode = (props: Omit<CodeProps, 'node' | 'inline'>) => {
  return <code {...props} className={'text-gray-700 bg-gray-100 rounded px-1 py-0.5'} />;
};

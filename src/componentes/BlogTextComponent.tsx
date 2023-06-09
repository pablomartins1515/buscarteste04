import React, { ReactNode } from 'react';
import ReactHtmlParser from 'react-html-parser';

interface BlogTextComponentProps {
  html: string | null | undefined;
}

const BlogTextComponent: React.FC<BlogTextComponentProps> = ({ html }) => {
  return <div>{html ? ReactHtmlParser(html) : null}</div>;
};

export default BlogTextComponent;

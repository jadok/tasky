import markdown from 'markdown-it';

const md = markdown({
  html: true,
  linkify: true,
  typographer: true,
});

export default md;

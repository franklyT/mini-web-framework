COMPONENTS.head = {
  get get() {
    return /*html*/ `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${SITE_DATA.title}</title>
    <meta name="Description" content="{{ renderData.description or description or metadata.description }}">
`;
  },
  
  get write() {
    document.head!.innerHTML += this.get;
    return;
  },
};

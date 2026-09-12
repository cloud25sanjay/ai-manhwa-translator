export class PageNotFoundError extends Error {
  constructor(id: string) {
    super(`Page with id '${id}' was not found`);
    this.name = "PageNotFoundError";
  }
}

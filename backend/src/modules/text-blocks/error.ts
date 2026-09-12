export class TextBlockNotFoundError extends Error {
  constructor(id: string) {
    super(`Text block with id '${id}' was not found`);
    this.name = "TextBlockNotFoundError";
  }
}

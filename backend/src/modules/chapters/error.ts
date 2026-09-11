export class ChapterNotFoundError extends Error {
  constructor(id: string) {
    super(`Chapter with id '${id}' was not found`);
    this.name = "ChapterNotFoundError";
  }
}

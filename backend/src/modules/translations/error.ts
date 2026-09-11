export class TranslationNotFoundError extends Error {
  constructor(id: string) {
    super(`Translation with id '${id}' was not found`);
    this.name = "TranslationNotFoundError";
  }
}

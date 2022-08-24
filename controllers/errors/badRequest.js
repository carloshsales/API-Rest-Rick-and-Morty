export function badRequest(error, res) {
  res.status(400).send(error.message);
}
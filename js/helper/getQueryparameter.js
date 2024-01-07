export function getQueryParameter(id) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const idValue = params.get(id);
  return idValue;
}

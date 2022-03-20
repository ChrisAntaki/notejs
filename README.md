# Notejs

Execute JavaScript from Algorand transaction notes.

## Usage

1. Import the `note.js` script. This defines the async `exex` and `read` functions.

```html
<script src="./note.js"></script>
```

2. Execute JavaScript from a given transaction note.

```html
<script>
  (async () => {
    // Create art.
    const txnId = "EYKOBHVOSJJMB4GMDXSHBM7GHUBCBT3REZRFMEADJP56DIY5G2RA";
    await exec(txnId);
  })();
</script>
```

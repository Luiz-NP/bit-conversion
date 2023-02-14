const [number] = process.argv.slice(2);

if (isNaN(+number)) console.log("please type a number.");
else console.log(bitTransformer(number, []));

function bitTransformer(n, bits) {
  bits.push(n%2);
  n = parseInt(n/2);

  if (n >= 2) return bitTransformer(n, bits);

  return [...bits, n].reverse().join('');
}

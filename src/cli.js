const [argv] = process.argv.slice(2);

if (isNaN(+argv)) return process.stdout.write("please type a number to convert.\n\n bitc -h for more help.\n");

if (argv === "-h" || argv === undefined) 
  return process.stdout.write("Usage: bitc [arguments]\n\nArguments:\n\n  -h      help.\n  number  convert your number to binary.\n");


return process.stdout.write((+argv).toString(2)+"\n");

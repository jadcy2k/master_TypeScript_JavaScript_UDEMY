## TYPESCRIPT, ALGUNOS TIPS:

Crear `"tsconfig.json"` ==> $ tsc -init

Crear archivo `"main.ts"` y lo compilamos ==> `$ tsc main.ts` 

Ejecutar "watch" que compila cada cambio ==> `$ tsc main.ts -w`

Compilar todos los archivos typescript ==> `$ tsc *.ts -w ` 

Otra alternativa: `$ tsc -w`

Compila archivos de un determinado path ==> `$ tsc -p ./ -w`

Cómo añadir código typescript directamente en el HTML: [https://github.com/niutech/typescript-compile](https://github.com/niutech/typescript-compile)

```js
<script type="text/typescript">
  ...
</script>

//add 2 files at end of HTML BODY:

<script type="text/javascript" src="typescript.min.js"></script>
<script type="text/javascript" src="typescript.compile.min.js"></script>
```

* https://raw.githubusercontent.com/niutech/typescript-compile/gh-pages/js/typescript.min.js

* https://raw.githubusercontent.com/niutech/typescript-compile/gh-pages/js/typescript.compile.min.js

## DIRECTORIOS DE ENTRADA/SALIDA

En `"tsconfig.js" `añadimos las siguientes líneas:

* "outDir" : "./directorio-scripts-compilados-JS",
* "rootDir" : "./directorio-archivos-TS"

por ejemplo, ponemos los ts en "src" y la salida en "scripts".


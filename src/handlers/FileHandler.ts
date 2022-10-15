const fs = require('fs')

export function loadFiles(path: string, subFiles: boolean) {
    const files: string[] = []

    fs.readdirSync(path).forEach((file: string) => {
        if (subFiles && isDirectory(`${path}/${file}`)) loadFiles(`${path}/${file}/`, subFiles).forEach(f => files.push(`${file}/${f}`))
        else if (isTSFile(file)) files.push(file)
    })

    return files
}

export function isDirectory(path: string) {
    return fs.lstatSync(path).isDirectory()
}

export function isJSFile(path: string) {
    return path.endsWith('.js')
}

export function isTSFile(path: string) {
    return path.endsWith('.ts')
}

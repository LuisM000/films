import { Container } from '@/shared/infrastructure/container'
import { loadControllers, scopePerRequest } from 'awilix-express'
import express from 'express'
//import path from 'path'

export class Server {

  constructor(private container: Container) {
  }

  public start() {
    const port = process.env.PORT || 3000

    const app = express()
      .use(express.json())
      .use(scopePerRequest(this.container.invoke()))
      .use(loadControllers('src/infrastructure/express/controllers/*.ts'))

    //const configFilePath = path.join(__dirname, 'config', 'app.config.js')
    //const controllersPath = path.join(path.dirname(configFilePath), 'controllers')
    //app.use(loadControllers(`${controllersPath}/*.ts`))

    app.get('/api/other-films/all', (_req, res) => {
      const directoryPath = __dirname
      const tree = getDirectoryTree(directoryPath)
      res.send('Hello World!' + printDirectoryTree(tree))
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

    function printDirectoryTree(tree: FileNode, indent = ''): string {
      let result = `${indent}${tree.name}\n`

      if (tree.children) {
        tree.children.forEach((child) => {
          result += printDirectoryTree(child, `${indent}  |`)
        })
      }

      return result
    }
  }


}

import fs from 'fs'
import path from 'path'

interface FileNode {
  path: string;
  name: string;
  children?: FileNode[];
}

function getDirectoryTree(directoryPath: string): FileNode {
  const stats = fs.statSync(directoryPath)
  if (!stats.isDirectory()) {
    throw new Error(`${directoryPath} is not a directory.`)
  }

  const directoryTree: FileNode = {
    path: directoryPath,
    name: path.basename(directoryPath),
    children: [],
  }

  const files = fs.readdirSync(directoryPath)
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file)
    const fileStats = fs.statSync(filePath)

    if (fileStats.isDirectory()) {
      directoryTree.children?.push(getDirectoryTree(filePath))
    } else {
      directoryTree.children?.push({
        path: filePath,
        name: file,
      })
    }
  })

  return directoryTree
}


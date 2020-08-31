export default class Router {
  protected pages: any;

  public match(pathInfo: string) {
    if (pathInfo.substr(0, 1) === '/') {
      pathInfo = pathInfo.substr(1);
    }

    const paths = pathInfo.split('/');
    const pages = this.getPages();
    const result = this.matchPaths(paths, pages);
    if (!result) {
      return null;
    }

    const params = this.detectParams(result.paths, paths);
    const collection = this.detectCollection(result, paths);

    return {
      ...result,
      params,
      // @experimental
      collection,
    };
  }

  public getPages() {
    return this.pages;
  }

  public setPages(pages: any) {
    this.pages = pages;
  }

  protected detectParams(filePaths: string[], urlPaths: string[]) {
    const regex = /\[(.+?)\]/;
    let params: any = {};
    let i = -1;
    for (const path of filePaths) {
      i++;
      if (this.hasVar(path)) {
        const matches = regex.exec(path);
        if (matches) {
          params[matches[1]] = urlPaths[i];
        }
      }
    }
    return params;
  }

  protected detectCollection(result: any, urlPaths: string[]) {
    if (result.index) {
      return urlPaths.join('/');
    }

    const length = this.hasVar(result.paths[result.paths.length - 2]) ? 2 : 1;

    return urlPaths.slice(0, -length).join('/');
  }

  protected matchPaths(urlPaths: string[], filePaths: any, depth: number = 0, matches: string[] = []): any {
    if (typeof urlPaths[depth] === 'undefined') {
      return null;
    }

    const isLast = depth + 1 === urlPaths.length;
    for (const filePath of Object.keys(filePaths)) {
      const next: any = filePaths[filePath];

      if (!this.matchPath(urlPaths[depth], filePath)) {
        continue;
      }

      const hasNext = this.hasNext(next);
      if (isLast && this.isEnded(next, hasNext)) {
        matches.push(filePath);
        return {...next, paths: matches};
      }

      if (!hasNext) {
        continue;
      }

      const result = this.matchPaths(urlPaths, next, depth + 1, matches.concat(filePath));
      if (result) {
        return result;
      }
    }

    return null;
  }

  protected matchPath(urlPath: string, filePath: string): boolean {
    // Ignore config
    if (filePath.substr(0, 1) === '_') {
      return false;
    }

    if ('/' + urlPath === filePath) {
      return true;
    }

    return this.hasVar(filePath);
  }

  protected hasNext(pages: any): boolean {
    if (!pages || typeof pages === 'string') {
      return false;
    }

    for (const name of Object.keys(pages)) {
      if (name.substr(0, 1) === '/') {
        return true;
      }
    }
    return false;
  }

  protected hasVar(path: string) {
    return path.includes('[');
  }

  private isEnded(next: any, hasNext: boolean): boolean {
    if (!hasNext) {
      return true;
    }

    for (const name of Object.keys(next)) {
      if (name.substr(0, 1) !== '/') {
        return true;
      }
    }
    return false;
  }
}

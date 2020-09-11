import Req from './Req';
import Router from "./Router";
import Base, {ServiceOptions} from './Base';

export default class App extends Base {
  protected pluginIds: string[] = [];

  protected pageMap: Record<string, string> = {};

  /**
   * @experimental
   */
  page: any;

  protected req: Req;

  protected router: Router;

  constructor(options?: ServiceOptions) {
    super(options);

    this.req = this.wei.get('req') as Req;
    this.router = this.wei.get('router') as Router;
  }

  matchLocation(location: Location) {
    const pathInfo = this.req.getPathInfo(location);
    const page = this.router.match(pathInfo);

    this.page = page;
    this.req.setRouterParams(page ? page.params : {});

    return page;
  }

  public getPluginIds() {
    return this.pluginIds;
  }

  public setPluginIds(pluginIds: string[]) {
    this.pluginIds = pluginIds;
    return this;
  }
}

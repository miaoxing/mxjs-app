import Req from './Req';
import Router, {MatchResult} from './Router';
import Base, {ServiceOptions} from './Base';

type Page = Partial<MatchResult>;

export default class App extends Base {
  protected pluginIds: string[] = [];

  protected pageMap: Record<string, string> = {};

  /**
   * @experimental
   * @todo 考虑改为独立对象
   */
  public page: Page = {
    collection: '',
    index: false,
  };

  protected req: Req;

  protected router: Router;

  protected loadedPluginIds: Promise<boolean>;

  protected resolvePluginIds: (value: boolean) => void;

  constructor(options?: ServiceOptions) {
    super(options);

    this.req = this.wei.get('req') as Req;
    this.router = this.wei.get('router') as Router;

    this.loadedPluginIds = new Promise((resolve) => {
      this.resolvePluginIds = resolve;
    });
  }

  matchLocation(location: Location): Page {
    const pathInfo = this.req.getPathInfo(location);
    const page = this.router.match(pathInfo);

    this.page = page;
    this.req.setRouterParams(page ? page.params : {});

    return page;
  }

  public async getPluginIds(): Promise<string[]> {
    await this.loadedPluginIds;
    return this.pluginIds;
  }

  public setPluginIds(pluginIds: string[]): this {
    this.pluginIds = pluginIds;
    this.resolvePluginIds(true);
    return this;
  }
}

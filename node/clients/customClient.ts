import { ExternalClient, IOContext, InstanceOptions } from "@vtex/api";

export default class CustomClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://cambuci.vtexcommercestable.com.br', context, {
      ...options,
      headers: {
        "X-VTEX-API-AppKey": "xxxx",
        "X-VTEX-API-AppToken": "xxxx",
        "Content-Type": "application/json",
        "Accept": "application/vnd.vtex.ds.v10+json",
      }
    });
  }

  public async getCustomer(email: string) {
    return await this.http.get(`/api/dataentities/CL/search?_fields=email,firstName,gender&_where=email${email}`)
  }
}

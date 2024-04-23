import parser from 'co-body'

export async function getCustomClient(ctx: Context, next: () => Promise<any>) {

  const {
    clients: { customClient }
  } = ctx

  const { email } = await parser(ctx.req)

  console.log(email)

  const response = await customClient.getCustomer(String(email))

  ctx.status = 200

  ctx.body = { response }

  next()
}

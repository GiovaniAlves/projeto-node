import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Shoud set props and id', () => {
    const props = { prop1: 'first value', prop2: 32 }
    const id = '0ccfc0fc-5ab6-48c2-9225-9d12670941a9'
    const entity = new StubEntity(props, id)

    expect(entity.props).toStrictEqual(props)
    expect(uuidValidate(entity.id)).toBeTruthy()
    expect(entity.id).toEqual(id)
  })

  it('Shoud convert the entity to a javascript object', () => {
    const props = { prop1: 'first value', prop2: 32 }
    const id = '0ccfc0fc-5ab6-48c2-9225-9d12670941a9'
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    })
  })
})

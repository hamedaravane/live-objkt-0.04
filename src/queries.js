export const allObjkts = `query MyQuery {
  event(order_by: {timestamp: desc}, where: {event_type: {_eq: "ask_purchase"}, token: {supply: {_lte: "50"}}}, limit: 18) {
    amount
    creator {
      address
      alias
      twitter
    }
    event_type
    price
    token {
      average
      decimals
      highest_offer
      last_listed
      last_metadata_update
      level
      lowest_ask
      metadata
      name
      supply
      thumbnail_uri
      timestamp
      pk
      royalties {
        amount
        decimals
        token {
          artifact_uri
          average
          decimals
          description
          display_uri
          extra
          flag
          highest_offer
          is_boolean_amount
          last_listed
          last_metadata_update
          level
          lowest_ask
          metadata
          mime
          name
          ophash
          rights
          supply
          symbol
          thumbnail_uri
          timestamp
          tzip16_key
        }
      }
      token_id
    }
    fa_contract
    fa {
      name
    }
    marketplace {
      name
    }
  }
}`
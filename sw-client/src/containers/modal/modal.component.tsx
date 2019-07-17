import * as React from 'react'
import { map, truncate, sortBy } from 'lodash'
import { Wrapper, Close, InnerGrid, ScrollBox } from './modal.styles'

const sortByDate = (input: any[]) => sortBy(input, ({ release_date }) => release_date).reverse()

export const Modal = ({ description, hideModal }: any) => {
  return (
    <Wrapper show={Boolean(description)}>
      <ScrollBox>
        <InnerGrid>
          {map(sortByDate(description), ({ title, release_date, opening_crawl }) => (
            <>
              <div>{title}</div>
              <div>{release_date}</div>
              <div>{truncate(opening_crawl, {length: 150})}</div>
            </>
          ))}
        </InnerGrid>
      </ScrollBox>
      <Close onClick={hideModal}>
        ✕
      </Close>
    </Wrapper>
  )
}

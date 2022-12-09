import { gql } from '@apollo/client/core'

export const GET_HOME_PAGE_EVENTS = gql`
  query {
    events(sort: "-date_created", limit: 27) {
      title
      overview
      cover_image
      date_created
      date_updated
      slug
    }
  }
`

export const GET_EVENTS_PAGE_EVENTS = gql`
  query {
    events(sort: "-date_created", limit: 42) {
      title
      overview
      cover_image
      date_created
      date_updated
      slug
    }
  }
`

export const GET_EVENT = gql`
  query ($slug: String!) {
    events(filter: { slug: { _eq: $slug } }) {
      title
      overview
      cover_image
      editor_state
      date_created
      date_updated
      slug
    }
  }
`

export const GET_HOME_PAGE_ARTICLES = gql`
  query {
    articles(sort: "-date_created", limit: 30) {
      title
      overview
      cover_image
      date_created
      date_updated
      slug
    }
  }
`

export const GET_STORIES_PAGE_ARTICLES = gql`
  query {
    articles(sort: "-date_created", limit: 30) {
      title
      overview
      cover_image
      date_created
      date_updated
      slug
    }
  }
`

export const GET_SIDEBAR_ARTICLES = gql`
  query {
    articles {
      title
      overview
      cover_image
      date_created
      date_updated
      slug
    }
  }
`

export const GET_TRENDING_BAR_ARTICLES = gql`
  query {
    articles {
      title
      overview
      cover_image
      date_created
      date_updated
      slug
    }
  }
`
export const GET_ARTICLE = gql`
  query ($slug: String!) {
    articles(filter: { slug: { _eq: $slug } }) {
      title
      overview
      cover_image
      editor_state
      date_created
      date_updated
      slug
    }
  }
`

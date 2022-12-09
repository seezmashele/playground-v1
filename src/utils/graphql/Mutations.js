import { gql } from '@apollo/client/core'

export const CREATE_ARTICLE_MUTATION = gql`
  mutation createArticleMutation(
    $title: String!
    $overview: String!
    $coverImage: String!
    $editorState: String!
    $slug: String!
  ) {
    create_articles_item(
      data: {
        title: $title
        overview: $overview
        cover_image: $coverImage
        editor_state: $editorState
        slug: $slug
      }
    ) {
      id
      title
      overview
      cover_image
      editor_state
      slug
    }
  }
`

export const CREATE_EVENT_MUTATION = gql`
  mutation createEventMutation(
    $title: String!
    $overview: String!
    $coverImage: String!
    $editorState: String!
    $startDate: String!
    $slug: String!
  ) {
    create_events_item(
      data: {
        title: $title
        overview: $overview
        cover_image: $coverImage
        editor_state: $editorState
        start_date: $startDate
        slug: $slug
      }
    ) {
      title
      overview
      cover_image
      editor_state
      start_date
      slug
    }
  }
`

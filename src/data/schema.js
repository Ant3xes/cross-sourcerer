import {gql} from '@apollo/client'

export const infoUser = gql`
{
    user(login: "Ant3xes") {
      name
      login
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(first: 100) {
        totalCount
        nodes {
          name
          defaultBranchRef {
            target {
              ... on Commit {
                additions
                deletions
                history {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
  `
export const Repositories = gql`
{
  user(login: "Ant3xes") {
    updatedAt
    repositories(first: 100) {
      nodes {
        name
        description
        nameWithOwner
        createdAt
        collaborators {
          totalCount
          nodes {
            avatarUrl
            name
            login
          }
        }
        languages(first: 100) {
          totalCount
          nodes {
            name
            color
          }
      }
        defaultBranchRef {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
      }
    }
  }
}
`
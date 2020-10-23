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

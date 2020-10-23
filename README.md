# Partie 1
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

# Partie 2
{
  user(login: "Ant3xes") {
    repositories(first: 100) {
      totalCount
      nodes {
        updatedAt
        createdAt
        languages(first: 100) {
          totalCount
          nodes {
            name
            color
          }
        }
      }
    }
  }
}



# Partie 3
{
  user(login: "Ant3xes") {
    repositories(first: 100) {
      totalCount
      nodes {
        updatedAt
        createdAt
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
        languages(first: 100) {
          totalCount
          nodes {
            name
            color
          }
        }
      }
    }
  }
}


# Partie 4
{
  user(login: "Ant3xes") {
    updatedAt
    repositories(first: 100, orderBy: {field: PUSHED_AT, direction: DESC}) {
      nodes {
        name
        description
        nameWithOwner
        createdAt
        collaborators {
          nodes {
            avatarUrl
            name
            login
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
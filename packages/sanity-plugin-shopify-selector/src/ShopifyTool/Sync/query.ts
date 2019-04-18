export const productsQuery = /* GraphQL */ `
	query ProductsQuery($first: Int!, $after: String) {
		products(first: $first, after: $after) {
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
			edges {
				cursor
				node {
					id
					handle
					title
				}
			}
		}
	}
`

export const collectionsQuery = /* GraphQL */ `
	query CollectionsQuery($first: Int!, $after: String) {
		collections(first: $first, after: $after) {
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
			edges {
				cursor
				node {
					id
					handle
					title
				}
			}
		}
	}
`

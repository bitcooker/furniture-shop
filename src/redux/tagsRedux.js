/* selectors */
export const getAllTags = ({ tags }) => tags;

export const getAllProducts = state => state.products;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

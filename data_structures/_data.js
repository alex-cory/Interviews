/**
 * Data Variables
 *
 * These are to use throughout the JS datastructures library.
 *
 * Binary Tree
 * - Node Object No Parent Unbalanced
 * - Node Object With Parent Unbalanced
 * - Node Array No Parent Unbalanced
 * - Node Array With Parent Unbalanced
 * - Node Object No Parent Balanced
 * - Node Object With Parent Balanced
 * - Node Array No Parent Balanced
 * - Node Array With Parent Balanced
 * Binary Search Tree
 *                A
 *              /   \
 *            B      C
 *          /  \    /  \
 *        D     E  F    G
 *  Description: (B < A) && (D < B) && (B < E < A) && (C > A) && (C > F > A) && (G > C)
 * - Node Object No Parent Unbalanced
 * - Node Object With Parent Unbalanced
 * - Node Array No Parent Unbalanced
 * - Node Array With Parent Unbalanced
 * - Node Object No Parent Balanced
 * - Node Object With Parent Balanced
 * - Node Array No Parent Balanced
 * - Node Array With Parent Balanced
 */



/*
 * Tree Node Object, No Parent
 */
export const treeObjNP = {
  'data': 8,
  'left': {
    'data': 7,
    'left': null,
    'right': null
  },
  'right': {
    'data': 9,
    'left': null,
    'right': null
  }
};

/*
 * Tree Node Object, With Parent
 */
export const treeObj = {
  'data': 8,
  'left': {
    'data': 7,
    'left': null,
    'right': null
  },
  'right': {
    'data': 9,
    'left': null,
    'right': null
  },
  'parent': {
    'data': 10,
    'left': {
      'data': 8,
      'left': {
        'data': 7,
        'left': null,
        'right': null
      },
      'right': {
        'data': 9,
        'left': null,
        'right': null
      }
    },
    'right': {
      'data': 11,
      'left': null,
      'right': null
    }
  }
};

/*
 * Tree Node Array Left, Right
 */
export const treeArrayNP = [
  10,
  [ // left
    9,
    [ // left
      8,
      null,
      null
    ],
    [ // right
      9.5,
      null,
      null
    ]
  ],
  [ // right
    11
  ]
];

/*
 * Tree Node Array Left, Right, Parent
 */
export const treeArray = [
  10,
  [ // LEFT
    9,
    [ // left
      8,
      null,
      null
    ],
    [ // right
      9.5,
      null,
      null
    ]
  ],
  [ // RIGHT
    11
  ],
  [ // PARENT of 10
    12,
    [ // left of 12
      10,
      [ // left of 10
        9,
        [ // left 0f 9
          8,
          null, // left of 8
          null  // right of 8
        ],
        [ // right of 9
          9.5,
          null, // left of 9.5
          null  // right of 9.5
        ]
      ],
      [ // right of 10
        11
      ],
    ],
    [ // right of 12
      13,
      null,
      null
    ]
  ]
];


/*
 * Binary Search Tree Array Left, Right, Parent
 */
export const bstArray = [
  10,
  [ // LEFT
    9,
    [ // left
      8,
      null,
      null
    ],
    [ // right
      9.5,
      null,
      null
    ]
  ],
  [ // RIGHT
    11
  ],
  [ // PARENT of 10
    12,
    [ // left of 12
      10,
      [ // left of 10
        9,
        [ // left 0f 9
          8,
          null, // left of 8
          null  // right of 8
        ],
        [ // right of 9
          9.5,
          null, // left of 9.5
          null  // right of 9.5
        ]
      ],
      [ // right of 10
        11
      ],
    ],
    [ // right of 12
      13,
      null,
      null
    ]
  ]
];


/*
 * Binary Search Tree Object, With Parent
 */
export const bstObj = {
  'data': 8,
  'left': {
    'data': 7,
    'left': null,
    'right': null
  },
  'right': {
    'data': 9,
    'left': null,
    'right': null
  },
  'parent': {
    'data': 10,
    'left': {
      'data': 8,
      'left': {
        'data': 7,
        'left': null,
        'right': null
      },
      'right': {
        'data': 9,
        'left': null,
        'right': null
      }
    },
    'right': {
      'data': 11,
      'left': null,
      'right': null
    }
  }
}

export const linkedListObj = {
  data: 0,
  next: {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: null
      }
    }
  }
}
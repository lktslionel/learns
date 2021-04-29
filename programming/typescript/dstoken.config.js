

// module.exports = {
  
//   name: "",
//   sources: [
//     {
//       plateform: "figma|sketch",
//       type: "api",
//       options: {}
//     },
//     {
//       plateform: "json",
//       type: "generic",
//       options: {}
//     }
//   ],
//   targets: [
//     {
//       plateform: "sass",
//       type: "lang",
//       options: {}
//     },
//     {
//       plateform: "sass",
//       type: "lang",
//       options: {}
//     },
//     {
//       plateform: "android",
//       type: "os",
//       options: {}
//     }
//   ],
//   plugins: [
    
//   ]
// }

// export default {
//   sources: {
//     figma: {
//       api_token: "XXXXXX",
//       options: {}
//     },
//     json: {
//       options: {}
//     }
//   },
//   targets: {
//     sass: {
      
//     },
//     android: {

//     }
//   },
//   plugins: {
    
//   } 
// }



// export default {
//   sources: {
//     figma: {
//       api_token: process.env.DSTOKEN_FIGMA_API_TOKEN
//       options: {}
//     },
//     json: {
//       options: {}
//     }
//   },
//   builders: {
//     style_dictionary: {

//     }
//   },
//   targets: {
//     sass: {
      
//     },
//     android: {

//     }
//   },
//   plugins: {
    
//   }
// }


module.exports = function (config) {

  config.builders = {
    styleDictionary: {

    },
    customBuilder: {

    }
  }

  config.sources = {
    figma: {
      platform: "figma",
      type: "api",
      options: {}
    }
  }

  config.tasks = [
    {
      // builder: {
      //   style_dictionary: {

      //   }
      // },
      sources: [
        config.sources.figma,
        {
          platform: "json",
          type: "generic",
          options: {}
        }
      ],
      targets: [
        {
          platform: "android",
          type: "os",
          builder: config.builders.custom_builder,
          options: {
            transforms: [],
            buildPath: [],
          }
        }, 
        {
          platform: "scss",
          type: "generic",
          // builder: config.builders.style_dictionary, // By default
          options: {}
        } 
      ]
    }
  ]

  return config;

}

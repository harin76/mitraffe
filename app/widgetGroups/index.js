const widgetGroups = {
  columns: [{
      name: 'ONE',
      template: {
        tagName: 'table',
        properties: {
          className: 'row'
        },
        children: [{
          tagName: 'tr',
          children: [{
            tagName: 'td.wrapper',
            children: [{
              tagName: 'table.twelve.columns',
              children: [{
                tagName: 'tr',
                children: [{
                  tagName: 'td',
                  children: [{
                    tagName: 'img',
                    properties: {
                      placeholder: true,
                      src: 'http://placehold.it/600x300/01579b/ffffff?text=column1'
                    }
                  }]
                }]
              }]
            }]
          }]
        }]
      },
      isContainer: true
    }, {
      name: 'TWO',
      template: {
        tagName: 'table',
        properties: {
          className: 'row'
        },
        children: [{
          tagName: 'tr',
          children: [{
            tagName: 'td.wrapper',
            children: [{
              tagName: 'table.six.columns',
              children: [{
                tagName: 'tr',
                children: [{
                  tagName: 'td',
                  children: [{
                    tagName: 'img',
                    properties: {
                      placeholder: true,
                      src: 'http://placehold.it/600x300/01579b/ffffff?text=column1'
                    }
                  }]
                }]
              }]
            }]
          }, {
            tagName: 'td.wrapper.last',
            children: [{
              tagName: 'table.six.columns',
              children: [{
                tagName: 'tr',
                children: [{
                  tagName: 'td',
                  children: [{
                    tagName: 'img',
                    properties: {
                      placeholder: true,
                      src: 'http://placehold.it/600x300/01579b/ffffff?text=column2'
                    }
                  }]
                }]
              }]
            }]
          }]
        }]
      },
      isContainer: true
    }, {
      name: 'THREE',
      template: {
        tagName: 'table',
        properties: {
          className: 'row'
        },
        children: [{
          tagName: 'tr',
          children: [{
            tagName: 'td.wrapper',
            children: [{
              tagName: 'table.four.columns',
              children: [{
                tagName: 'tr',
                children: [{
                  tagName: 'td',
                  children: [{
                    tagName: 'img',
                    properties: {
                      placeholder: true,
                      src: 'http://placehold.it/600x300/01579b/ffffff?text=column1'
                    }
                  }]
                }]
              }]
            }]
          }, {
            tagName: 'td.wrapper',
            children: [{
              tagName: 'table.four.columns',
              children: [{
                tagName: 'tr',
                children: [{
                  tagName: 'td',
                  properties: {
                    contenteditable: true
                  },
                  children: [{
                    tagName: 'img',
                    properties: {
                      placeholder: true,
                      src: 'http://placehold.it/600x300/01579b/ffffff?text=column2'
                    }
                  }]
                }]
              }]
            }]
          }, {
            tagName: 'td.wrapper.last',
            children: [{
              tagName: 'table.four.columns',
              children: [{
                tagName: 'tr',
                children: [{
                  tagName: 'td',
                  children: [{
                    tagName: 'img',
                    properties: {
                      placeholder: true,
                      src: 'http://placehold.it/600x300/01579b/ffffff?text=column3'
                    }
                  }]
                }]
              }]
            }]
          }]
        }]
      },
      isContainer: true
    }, {
      name: 'FOUR',
      template: {
        tagName: 'table',
        properties: {
          className: 'row'
        },
        children: [{
          tagName: 'tr',
          children: [{
            tagName: 'td.wrapper',
            children: [{
              tagName: 'table.three.columns',
              children: [{
                tagName: 'tr',
                children: [{
                  tagName: 'td',
                  children: [{
                    tagName: 'img',
                    properties: {
                      placeholder: true,
                      src: 'http://placehold.it/600x300/01579b/ffffff?text=column1'
                    }
                  }]
                }]
              }]
            }]
          }, {
            tagName: 'td.wrapper',
            children: [{
              tagName: 'table.three.columns',
              children: [{
                tagName: 'tr',
                children: [{
                  tagName: 'td',
                  children: [{
                    tagName: 'img',
                    properties: {
                      placeholder: true,
                      src: 'http://placehold.it/600x300/01579b/ffffff?text=column2'
                    }
                  }]
                }]
              }]
            }]
          }, {
            tagName: 'td.wrapper',
            children: [{
              tagName: 'table.three.columns',
              children: [{
                tagName: 'tr',
                children: [{
                  tagName: 'td',
                  children: [{
                    tagName: 'img',
                    properties: {
                      placeholder: true,
                      src: 'http://placehold.it/600x300/01579b/ffffff?text=column3'
                    }
                  }]
                }]
              }]
            }]
          }, {
            tagName: 'td.wrapper.last',
            children: [{
              tagName: 'table.three.columns',
              children: [{
                tagName: 'tr',
                children: [{
                  tagName: 'td',
                  children: [{
                    tagName: 'img',
                    properties: {
                      placeholder: true,
                      src: 'http://placehold.it/600x300/01579b/ffffff?text=column4'
                    }
                  }]
                }]
              }]
            }]
          }]
        }]
      },
      isContainer: true
    },
    /*      {
    name:'column',
    template: {
    tagName: 'table',
    properties: {className: 'twelve.columns'},
    children: [
    {tagName: 'tr', children:[{tagName:'td'}]}
    ]
    },
    isContainer:true
    },
    {
    name: 'container',
    template: {
    tagName: 'table',
    properties: {className: 'container'},
    children: [
    {tagName: 'tr', children:[{tagName:'td'}]}
    ]
    },
    isContainer:true
    },
    {name: 'panel'}*/
  ],
  components: [{
    name: 'text',
    template: {
      tagName: 'p',
      properties: {
        contenteditable: false,
        onclick: function(e) {
          alert('clicked');
        }
      },
      children: [{
        tagName: 'h1',
        properties: {
          onclick: function(e) {
            alert('clicked h1');
          }
        },
        text: 'Edit Me!'
      }]
    }
  }, {
    name: 'image',
    template: {
      tagName: 'img',
      properties: {
        width: "150",
        height: "150",
        src: "http://placehold.it/600x600&text=Retina-Image"
      }
    }
  }, {
    name: '-'
  }]
};

export default widgetGroups;

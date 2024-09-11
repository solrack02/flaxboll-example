

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'sc1';

          let args: any = [];

          const screens = [
            
        
        
        () => <>{/*styles library*/}</>, 
        
        
        () => <>{/*elements library*/}</>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"sc2",

          styles:[
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primaryColor"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

          screenElements:[(...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
              {
                backgroundColor: 'blue',
                borderRadius: 20,
                paddingVertical: 5,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
              ],

          childrenItems: [()=><></>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("sc1");
        }
        ],

          args,
        }}/>],

          startFunctions:[()=>{}],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"sc1",

          styles:[
        
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#F3F3F3"
        }})] }})],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "250px"
        }})] }}), 
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.position({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "absolute"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
    
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), stls.zIndex({ pass: { arrayValue: ['1'] }})],

      URIvariablePath:[jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/longBar.png?alt=media&token=ad4b584a-4b57-440e-9f84-d57c6e794d02"
        }})],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "30px"
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "space-between"
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), 
stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), stls.paddingHorizontal({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), 
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[(...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
        
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10" {...props} > <Path {...props} d="M0 1.5A1.5 1.5 0 0 1 1.5 0h18a1.5 1.5 0 0 1 0 3h-18A1.5 1.5 0 0 1 0 1.5ZM0 8.5A1.5 1.5 0 0 1 1.5 7h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 0 8.5Z" /> </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})],

      args,
    }}/>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("sc2");
        }
        ],

          args,
        }}/>],

            args,
          }}/>
        , 
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "70px"
        }})] }})],

      URIvariablePath:[jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/logo_poupi.png?alt=media&token=86a41293-886c-4d0c-bf9c-b2d515f26edd"
        }})],

      args,
    }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "140px"
        }})] }}), stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "140px"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }}), stls.flex({ pass: { arrayValue: ['1'] }})],

      URIvariablePath:[jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/img.png?alt=media&token=dcf1259d-826b-4bbf-b178-b0442841183f"
        }})],

      args,
    }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.20"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[(...args:any) => <Elements.ScrollBar pass={{
            styles: [stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }})],
            arrProps: [
        (...args:any) => props.horizontal({ pass: {
          boolean: ['true']
        }}), (...args:any) => props.showsHorizontalScrollIndicator({ pass: {
          showsHorizontalScrollIndicator: [jsvals.j8({pass: {
          propertieValues: "false"
        }})]
        }})],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            
        (...args:any) => props.horizontal({ pass: {
          boolean: ['true']
        }}), (...args:any) => props.ItemSeparatorComponent({ pass: {
          component: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ]
        }})
          ],

          pData: jsvals.j8({pass: {
          propertieValues: "all.categs"
        }}),

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), 
stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), 
stls.shadows({ pass: {
          shadowColor: ['#000'],
          shadowOffset: ['{width: 0, height: 0}'],
          shadowOpacity: ['0.4px'],
          shadowRadius: ['20px'],
        }}), stls.marginVertical({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "5px"
        }})] }}), 
        stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "110px"
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "50px"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }})],

      URIvariablePath:[jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.item.image"
        }}),
          args
        }})],

      args,
    }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.item.name"
        }}),
          args
        }})
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

          args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            
        (...args:any) => props.horizontal({ pass: {
          boolean: ['true']
        }}), (...args:any) => props.ItemSeparatorComponent({ pass: {
          component: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "30px"
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "•"
        }})
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.10"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ]
        }})
          ],

          pData: jsvals.j3({pass: {
          arrayStrings: [
        jsvals.j8({pass: {
          propertieValues: "all."
        }}), jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.currCateg"
        }})
        }})],
          joinSeparator: ""
        }}),

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "30px"
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.item.name"
        }}),
          args
        }})
          ],

          args,

        }}/>],

            args,
          }}/>
        
          ],

          args,
        }}/>, 
        (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: jsvals.j8({pass: {
          propertieValues: "all.prods"
        }}),

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), 
stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), 
stls.shadows({ pass: {
          shadowColor: ['#000'],
          shadowOffset: ['{width: 0, height: 0}'],
          shadowOpacity: ['0.4px'],
          shadowRadius: ['20px'],
        }}), stls.marginVertical({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "5px"
        }})] }}), 
        stls.marginHorizontal({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "15px"
        }})] }}), stls.padding({ pass: { arrayValue: ['10px'] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
              {
                height: "50px",
                width: "80px",
                backgroundColor: "#FDFDFD",
                borderWidth: 2,
                borderColor: "#EEE"
              }
              ],

      URIvariablePath:[jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.item.image"
        }}),
          args
        }})],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.flex({ pass: { arrayValue: ['1'] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.0.item.name"
        }}),
          args
        }})
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.fontWeight({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "600"
        }})] }})
          ],

          children: [
            
        jsvals.j8({pass: {
          propertieValues: "R$"
        }}), jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.0.item.price"
        }}),
          args
        }})
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[[]],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.fontWeight({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "600"
        }})] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "+"
        }})
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.fontWeight({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "600"
        }})] }})
          ],

          children: [
            jsvals.argReader({pass: {
          argPath: jsvals.j8({pass: {
          propertieValues: "#0.0.0.item.amount"
        }}),
          args
        }})
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.fontWeight({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "600"
        }})] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "-"
        }})
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

          args,
        }}/>],
            args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.position({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "absolute"
        }})] }}), 
stls.bottom({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "0"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.percent.100"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.flexDirection({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "row"
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "space-around"
        }})] }}), stls.shadows({ pass: {
          shadowColor: ['#000'],
          shadowOffset: [jsvals.j8({pass: {
          propertieValues: "{width: 0, height: -4}"
        }})],
          shadowOpacity: [jsvals.j8({pass: {
          propertieValues: "0.1"
        }})],
          shadowRadius: [jsvals.j8({pass: {
          propertieValues: "6px"
        }})],
        }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
        
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} fill="red" viewBox="0 0 20 22" {...props} > <Path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21V11h6v10M1 8l9-7 9 7v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8Z" /> </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['transparent'],

      args,
    }}/>],

          pressableFunctions: [()=>console.log("Você Clicou!")],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
        
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "70px"
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "70px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})] }}), 
stls.marginTop({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "-36px"
        }})] }}), 
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "50%"
        }})] }}), stls.shadows({ pass: {
          shadowColor: ['#000'],
          shadowOffset: [jsvals.j8({pass: {
          propertieValues: "{width: 0, height: -4}"
        }})],
          shadowOpacity: [jsvals.j8({pass: {
          propertieValues: "0.1"
        }})],
          shadowRadius: [jsvals.j8({pass: {
          propertieValues: "6px"
        }})],
        }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[(...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "50%"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "56px"
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "56px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primaryColor"
        }})
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg xmlns="http://www.w3.org/2000/svg" width={26} height={25} fill="red" viewBox="0 0 26 25" {...props} > <Path fill="#fff" d="M8.294 19.571c-1.5 0-2.714 1.197-2.714 2.673s1.215 2.673 2.714 2.673c1.499 0 2.714-1.197 2.714-2.673S9.793 19.57 8.294 19.57Zm0 4.158a1.497 1.497 0 0 1-1.508-1.485c0-.82.675-1.485 1.508-1.485s1.508.665 1.508 1.485c0 .82-.675 1.485-1.508 1.485ZM19.755 19.571c-1.5 0-2.715 1.197-2.715 2.673s1.216 2.673 2.715 2.673c1.499 0 2.714-1.197 2.714-2.673s-1.215-2.673-2.714-2.673Zm0 4.158a1.497 1.497 0 0 1-1.508-1.485c0-.82.675-1.485 1.508-1.485.832 0 1.508.665 1.508 1.485 0 .82-.676 1.485-1.508 1.485ZM25.877 3.98a.758.758 0 0 0-.483-.238L5.761 3.475 5.218 1.84A2.772 2.772 0 0 0 2.624 0H.604A.599.599 0 0 0 0 .594c0 .328.27.594.603.594h2.02a1.566 1.566 0 0 1 1.449 1.04l3.83 11.374-.302.683a2.813 2.813 0 0 0 .272 2.584 2.815 2.815 0 0 0 2.262 1.247h11.732a.599.599 0 0 0 .603-.594.599.599 0 0 0-.603-.594H10.134a1.543 1.543 0 0 1-1.267-.713 1.612 1.612 0 0 1-.15-1.425l.24-.535 12.698-1.307a3.3 3.3 0 0 0 2.865-2.494l1.448-5.97a.499.499 0 0 0-.091-.504Zm-2.533 6.206a2.041 2.041 0 0 1-1.84 1.575L8.957 13.037 6.153 4.662l18.488.267-1.297 5.256Z" /> </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "25px",

      largura: "25px",

      preenchimento: [jsvals.j8({pass: {
          propertieValues: "#fff"
        }})],

      args,
    }}/>],

          pressableFunctions: [()=>console.log("Você Clicou!")],

          args,
        }}/>],

            args,
          }}/>
        , (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
        
stls.width({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.sizes.fixed.30"
        }})
        }})] }}), 
stls.justifyContent({ pass: { arrayValue: ['center'] }}), stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="red" viewBox="0 0 22 22" {...props} > <Path fill="#000" d="M9.688 0C4.346 0 0 4.346 0 9.688c0 5.343 4.346 9.689 9.688 9.689 5.343 0 9.689-4.346 9.689-9.689C19.377 4.346 15.03 0 9.688 0Zm0 17.588c-4.356 0-7.9-3.544-7.9-7.9 0-4.355 3.544-7.9 7.9-7.9s7.9 3.544 7.9 7.9-3.544 7.9-7.9 7.9Z" /> <Path fill="#000" d="m21.738 20.473-5.127-5.127a.894.894 0 1 0-1.265 1.265l5.127 5.127a.891.891 0 0 0 1.265 0 .894.894 0 0 0 0-1.265Z" /> </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "16px",

      largura: "16px",

      preenchimento: ['transparent'],

      args,
    }}/>],

          pressableFunctions: [()=>console.log("Você Clicou!")],

          args,
        }}/>],

            args,
          }}/>
        ],

          startFunctions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => ({
            'all': jsvals.j8({pass: {
          propertieValues: { 
        'colors': jsvals.j8({pass: {
          propertieValues: { "primaryColor": jsvals.j8({pass: {
          propertieValues: "#147804"
        }}) }
        }}), 
        'sizes': jsvals.j8({pass: {
          propertieValues: { 
        'fixed': jsvals.j8({pass: {
          propertieValues: { 
        "10": jsvals.j8({pass: {
          propertieValues: "10px"
        }}), 
        "20": jsvals.j8({pass: {
          propertieValues: "20px"
        }}), "30": jsvals.j8({pass: {
          propertieValues: "30px"
        }}) }
        }}), 'percent': jsvals.j8({pass: {
          propertieValues: { 
        "10": jsvals.j8({pass: {
          propertieValues: "10%"
        }}), 
        "20": jsvals.j8({pass: {
          propertieValues: "20%"
        }}), 
        "50": jsvals.j8({pass: {
          propertieValues: "50%"
        }}), "100": jsvals.j8({pass: {
          propertieValues: "100%"
        }}) }
        }}) }
        }}), 
        'categs': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Pets"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/dog.png?alt=media&token=f5bf526c-5fb3-4092-869d-11ffcfb25d2f"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Limpeza"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/cleaning.png?alt=media&token=70c342c4-1e04-4dd8-ab71-2ef9227d777a"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Bebidas"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/drink.png?alt=media&token=99dc2e9d-fecf-4cc4-9c84-a6fd9a6d1985"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Alimentos"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Hortifruti"
        }}), "image": jsvals.j8({pass: {
          propertieValues: "https://th.bing.com/th/id/OIP.V0veQoHgEoXnjRVZJ37fDAHaEK?rs=1&pid=ImgDetMain"
        }})}
        }}) ]
        }}), 
        'prods': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Torta Holandesa MISS DAISY 470g"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/torta.png?alt=media&token=4daa4ce3-ca7d-45ec-a8b4-f4162e648368"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "26,79"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Requeijão Vigor"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/requeijao.png?alt=media&token=a15c2035-3ef5-4f14-a7c8-7d58dd7b1fc0"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "6,59"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Presunto Sadia 200g"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/presunto.png?alt=media&token=bc236340-c063-41c6-a98c-af1707cfe482"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "9,60"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "name": jsvals.j8({pass: {
          propertieValues: "Sorvete Kibon 800ml Ovomaltine"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/sorvete.png?alt=media&token=e3e69eb6-b7c6-4ee8-8c72-294417307398"
        }}), 
        "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }}), "price": jsvals.j8({pass: {
          propertieValues: "19,90"
        }})}
        }}) ]
        }}), 
        "currCateg": jsvals.j8({pass: {
          propertieValues: "Pets"
        }}), 
        'Pets': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Rações"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: { }
        }}), jsvals.j8({pass: {
          propertieValues: { }
        }}) ]
        }}), 'Limpeza': jsvals.j8({pass: {
          propertieValues: [ jsvals.j8({pass: {
          propertieValues: { }
        }}) ]
        }}) }
        }})
          });
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            ()=>{}
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        

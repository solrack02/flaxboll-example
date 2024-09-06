

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
        stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "40px"
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "90px"
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
    }}/>, (...args:any) => <Elements.Text pass={{
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
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
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
        }})] }}), stls.marginHorizontal({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "15px"
        }})] }})],

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

      URIvariablePath:[jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/torta.png?alt=media&token=4daa4ce3-ca7d-45ec-a8b4-f4162e648368"
        }})],

      args,
    }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

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
            jsvals.j8({pass: {
          propertieValues: "Torta Holandesa MISS DAISY 470g"
        }})
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.fontWeight({ pass: { arrayValue: ['regular'] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "R$26,79"
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
        }}/>],

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
        }}), jsvals.j8({pass: {
          propertieValues: {"name": jsvals.j8({pass: {
          propertieValues: "Alimentos"
        }})}
        }}) ]
        }}), 'prods': jsvals.j8({pass: {
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
          propertieValues: "Reuqijão Vigor"
        }}), 
        "image": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/requeijao.png?alt=media&token=a15c2035-3ef5-4f14-a7c8-7d58dd7b1fc0"
        }}), 
        "price": jsvals.j8({pass: {
          propertieValues: "6,59"
        }}), "amount": jsvals.j8({pass: {
          propertieValues: "0"
        }})}
        }}), jsvals.j8({pass: {
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
        

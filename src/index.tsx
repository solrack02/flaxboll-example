

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
            styles: [[]],
            arrProps: [(...args:any) => props.horizontal({ pass: {
          boolean: ['true']
        }})],
            arrItems: [

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

            childrenItems:[() =><></>],

            args,
          }}/>
        ],
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
        }}), 'sizes': jsvals.j8({pass: {
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
        



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
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"sc2",

          styles:[
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primaryColor"
        }})
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100%"
        }})] }}), stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100%"
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
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
stls.backgroundColor({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "black"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100%"
        }})] }}), 
stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "30px"
        }})] }}), stls.justifyContent({ pass: { arrayValue: ['center'] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.color({ pass: { arrayValue: ["white"] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "Navbar"
        }})
          ],

          args,

        }}/>],

            args,
          }}/>
        , (...args:any) => <Elements.Pressable3 pass={{
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
          return tools.goTo("sc2");
        }
        ],

          args,
        }}/>],

          startFunctions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => ({
            'all': jsvals.j8({pass: {
          propertieValues: { 'colors': jsvals.j8({pass: {
          propertieValues: { "primaryColor": jsvals.j8({pass: {
          propertieValues: "#147804"
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
        

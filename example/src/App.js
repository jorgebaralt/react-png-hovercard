import React, { Component } from 'react'
// CSS
import classes from './App.module.css'
// JSX
import HoverCard from 'react-png-hovercard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

console.log(classes)
export default class App extends Component {
  render() {
    const firstCode = ` 
    <HoverCard
      maxWidth={400}
      animationSpeed={500}
      height={300}
      margin={10}
      front={
        <div className={classes.Front}>
          <img
            src='https://images.unsplash.com/photo-1498910265115-9fb541931cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1089&q=80'
            alt=''
            style={{ objectFit: 'cover' }}
          />
        </div>
      }
      back={
        <div className={classes.Back}>
          <p> I would do anything to be there</p>
        </div>
      }
  />
  `
    const secontCode = `
    <HoverCard
      maxWidth={300}
      animationSpeed={500}
      height={300}
      margin={10}
      front={
        <div className={classes.Front}>
          <p> Let's party</p>
        </div>
      }
      back={
        <div className={classes.Back}>
          <img
            src='https://media.giphy.com/media/6G8luKUp4dt1LpywIg/giphy.gif'
            alt=''
            style={{ objectFit: 'cover' }}
          />
        </div>
      }
    />
    `
    return (
      <div className={classes.App}>
        <h1 className={classes.Title}>React Plug-N'-Go HoverCard</h1>
        <h2 className={classes.Example}>Examples</h2>
        <ul className={classes.List}>
          <li className={classes.Item}>
            <a href=''>From Text to Image</a>
          </li>
          <li className={classes.Item}>
            <a href=''>From Text to GIF</a>
          </li>
          <li className={classes.Item}>
            <a href=''>From Text to Text</a>
          </li>
          <li className={classes.Item}>
            <a href=''>From any to any</a>
          </li>
        </ul>
        <h4 className={classes.Subtitle}>From text to Image</h4>
        <div className={classes.CodeBlock}>
          <SyntaxHighlighter language='javascript' style={atomOneDark}>
            {firstCode}
          </SyntaxHighlighter>
        </div>
        <div className={classes.CardContainer}>
          <HoverCard
            maxWidth={400}
            animationSpeed={500}
            height={300}
            margin={10}
            front={
              <div className={classes.Front}>
                <img
                  src='https://images.unsplash.com/photo-1498910265115-9fb541931cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1089&q=80'
                  alt=''
                />
              </div>
            }
            back={
              <div className={classes.Back}>
                <p> I would do anything to be there</p>
              </div>
            }
          />
        </div>

        <h4 className={classes.Subtitle}>From text to GIF</h4>
        <div className={classes.CodeBlock}>
          <SyntaxHighlighter language='javascript' style={atomOneDark}>
            {secontCode}
          </SyntaxHighlighter>
        </div>
        <div className={classes.CardContainer}>
          <HoverCard
            front={
              <div className={classes.Front}>
                <p> Let's party</p>
              </div>
            }
            back={
              <div className={classes.Back}>
                <img
                  src='https://media.giphy.com/media/6G8luKUp4dt1LpywIg/giphy.gif'
                  alt=''
                  style={{ objectFit: 'cover' }}
                />
              </div>
            }
            maxWidth={300}
            animationSpeed={500}
            height={300}
            margin={10}
          />
        </div>
        <h4 className={classes.Subtitle}>From text to Text</h4>
        <div className={classes.CardContainer}>
          <HoverCard
            front={
              <div className={classes.FrontText}>
                <p>I know this is kinda boring....</p>
              </div>
            }
            back={
              <div className={classes.BackText}>
                <p> But sometime, this is exactly what we need</p>
              </div>
            }
            maxWidth={400}
            animationSpeed={500}
            height={100}
            margin={10}
          />
        </div>
        <h4 className={classes.Subtitle}>From Any to Any</h4>
        <div className={classes.CardContainer}>
          <HoverCard
            front={
              <div className={classes.FrontText2}>
                <p> But text are still boring, what else can I do</p>
              </div>
            }
            back={
              <div className={classes.BackText2}>
                <p>Be creative. meanwhile, look at these SVG's</p>
                <div className={classes.SocialMedia}>
                  <svg
                    className={classes.SVG}
                    viewBox='0 0 112.196 112.196'
                    width='24px'
                    height='24px'
                  >
                    <circle cx='56.098' cy='56.097' r='56.098' fill='#f1f2f2' />
                    <path
                      d='M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118 c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715 c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662 C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967 c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z M27.865,83.739H41.27V43.409H27.865V83.739z'
                      fill='#007ab9'
                    />
                  </svg>
                  <svg
                    className={classes.SVG}
                    viewBox='0 0 438.549 438.549'
                    width='24px'
                    height='24px'
                    fill='currentColor'
                  >
                    <path d='M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z' />
                  </svg>
                  <svg
                    className={classes.SVG}
                    viewBox='0 0 473.931 473.931'
                    width='24px'
                    height='24px'
                  >
                    <circle
                      cx='236.966'
                      cy='236.966'
                      r='236.966'
                      fill='#d42428'
                    />
                    <path
                      d='M404.518,69.38c92.541,92.549,92.549,242.593,0,335.142c-92.541,92.541-242.593,92.545-335.142,0 L404.518,69.38z'
                      fill='#cc202d'
                    />
                    <path
                      d='M469.168,284.426L351.886,167.148l-138.322,15.749l-83.669,129.532l156.342,156.338 C378.157,449.322,450.422,376.612,469.168,284.426z'
                      fill='#ba202e'
                    />
                    <path
                      d='M360.971,191.238c0-19.865-16.093-35.966-35.947-35.966H156.372c-19.85,0-35.94,16.105-35.94,35.966 v96.444c0,19.865,16.093,35.966,35.94,35.966h168.649c19.858,0,35.947-16.105,35.947-35.966v-96.444H360.971z M216.64,280.146 v-90.584l68.695,45.294L216.64,280.146z'
                      fill='#fff'
                    />
                  </svg>
                </div>
              </div>
            }
            maxWidth={300}
            animationSpeed={500}
            height={200}
            margin={10}
          />
        </div>
        <p className={classes.Info}>
          Just make sure to be creative, and pass whatever to want to front, and
          back props.
        </p>
      </div>
    )
  }
}

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Homepage, AboutPage, ProjectsPage, ContactPage, PageNotFound } from '../pages'


export const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={ Homepage }
                />
                <Route
                    exact
                    path="/about"
                    component={ AboutPage }
                />
                <Route
                    exact
                    path="/projects"
                    component={ ProjectsPage }
                />
                <Route
                    exact
                    path="/contact"
                    component={ ContactPage }
                />
                <Route
                    path="*"
                    component={ PageNotFound }
                />
            </Switch>
        </BrowserRouter>
    )
}
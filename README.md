### Context: tapping history of React Router v 6.11

##### Last recap
1. loader(Page loading, Link, NavLink, Form - get(when role is search), submit - input onChange, push & replace optional)
2. action(Form - post, delete, fetcher.Form)
3. catch error(about route, about child, about children - by using pathless, set custom error msg by using throw new Error)
4. layout(children, index, Outlet)
5. param(/contacts/:contactId)

6. loader - request(url), params
7. action - request(formData), params

8. navigating state - useNavigation, submit
9. goBack - useNavigate
10. Optimistic UI - fetcher.formData
11. redirect - redirecting page

12. input is required name property in Form

13. folder structure
   /src/routes
   /index.js
   /error-page.js - handle at errorElement passed at route, and useRouteError is used at ErrorPage for console.error 

##### Questions
1. What is difference between action and method of Form
   1. action is 'path', like this(/destory)
   2. method is HTTP method like these(get or post)

##### Recap not important things but hope to remind
1. Way to write response instance when error occured => throw new Response("", { status: 404, statusText: "Not found" })
2. elements passed in route are rendered after completing of loader or action. 
3. defaultValue - useful property of input tag's
4. submit is used when call GET request with formData, fetcher is used when make post quest but without navigation


##### Additional study
1. Form props - replace, reloadDocument
2. Navigate - use when require force redirecting(ex: when unauthorized user visits private page)
3. useActionData - can get action result of previous navigation(form validation checking is common usecase)
4. useSubmit - can pass action or method, not just formData
5. useSearchParams - can access query string and can mutate current query string(like navigate)
6. useLocation, useParams - can access to location, params
7. FormData - for handling entire data about form, use Object.fromEntries
8. [isRouteErrorResponse](https://reactrouter.com/en/main/utils/is-route-error-response)


##### Escape hatch
1. ScrollRestoration
   1. it is recommended that rendering at root route component
   2. getKey: browser detects changing bewteen locations by location.key. even though locations have same location.path, they are handled as other. so, may don't restore scroll position. if you want to scroll restoration in this situation, you can change the default key value location.key to location.path.(or conditionally key or path);
   3. preventScrollReset: if location.key change, scroll restoration will occur. But if you pass true at preventScrollReset on Link(or Form), scroll reset will not occur.
   4. js bundle download, data fetch, full page rendering cause scroll flash when scroll restoration. so if you don't want to this, use ssr framework like remix.
2. useRouteLoaderData
   1. Make available data using at components in current rendered route;
3. useFetcher
   1. fetcher.submit: submit is initiated by developer
4. lazy
   1. can lazy import per route for split bundling(this case, you should write loader(or action) in file indicating import path)
   2. about lazy on a route, can seperate lazy and loader(or action)
5. defer & Await & useAsyncValue & React.Suspense
   1. if function need long time related with loader, component passed in route element will need many time. In this situation if you want to render first component with fallback component(data will fetch in parallel and if fetching completed, adapt later), you can consider this option. 
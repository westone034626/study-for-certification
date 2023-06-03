import { useLoaderData } from "react-router-dom";
import * as tests from "../../data/tests";
import Footer from "../../components/Footer";

export async function loader({ params }) {
  const testId = params.testId;
  const test = Object.values(tests).find((test) => test.id === Number(testId));

  if (!test) {
    throw new Response("", {
      status: 404,
      statusText: "Not found",
    });
  }

  return test;
}

export default function TestRoute() {
  const test = useLoaderData();

  return (
    <div style={{ flex: 1 }}>
      <h1>{test?.title}</h1>

      <p>
        Qui ad dolore do aliquip aliqua labore consectetur nulla. Aliquip enim
        mollit dolore ex deserunt pariatur quis do enim in dolore in. Excepteur
        consectetur nostrud occaecat velit velit dolore laboris labore irure
        velit et aliqua. Tempor culpa magna ullamco est nostrud fugiat nulla
        irure quis id adipisicing amet. Aliquip officia reprehenderit consequat
        aliquip in minim ullamco incididunt irure minim culpa veniam
        consectetur. Ad aliqua ex ex et ea aliqua elit reprehenderit. Eu
        exercitation culpa commodo ex ullamco ullamco laborum in consectetur.
        Officia veniam ullamco deserunt duis proident non mollit pariatur enim
        duis. Ea adipisicing occaecat velit labore enim consectetur enim laborum
        voluptate proident. Cillum nulla aute minim voluptate velit fugiat ipsum
        Lorem culpa eu sunt. Ex veniam ipsum in esse incididunt.
      </p>

      <p>
        Qui ad dolore do aliquip aliqua labore consectetur nulla. Aliquip enim
        mollit dolore ex deserunt pariatur quis do enim in dolore in. Excepteur
        consectetur nostrud occaecat velit velit dolore laboris labore irure
        velit et aliqua. Tempor culpa magna ullamco est nostrud fugiat nulla
        irure quis id adipisicing amet. Aliquip officia reprehenderit consequat
        aliquip in minim ullamco incididunt irure minim culpa veniam
        consectetur. Ad aliqua ex ex et ea aliqua elit reprehenderit. Eu
        exercitation culpa commodo ex ullamco ullamco laborum in consectetur.
        Officia veniam ullamco deserunt duis proident non mollit pariatur enim
        duis. Ea adipisicing occaecat velit labore enim consectetur enim laborum
        voluptate proident. Cillum nulla aute minim voluptate velit fugiat ipsum
        Lorem culpa eu sunt. Ex veniam ipsum in esse incididunt.
      </p>

      <p>
        Qui ad dolore do aliquip aliqua labore consectetur nulla. Aliquip enim
        mollit dolore ex deserunt pariatur quis do enim in dolore in. Excepteur
        consectetur nostrud occaecat velit velit dolore laboris labore irure
        velit et aliqua. Tempor culpa magna ullamco est nostrud fugiat nulla
        irure quis id adipisicing amet. Aliquip officia reprehenderit consequat
        aliquip in minim ullamco incididunt irure minim culpa veniam
        consectetur. Ad aliqua ex ex et ea aliqua elit reprehenderit. Eu
        exercitation culpa commodo ex ullamco ullamco laborum in consectetur.
        Officia veniam ullamco deserunt duis proident non mollit pariatur enim
        duis. Ea adipisicing occaecat velit labore enim consectetur enim laborum
        voluptate proident. Cillum nulla aute minim voluptate velit fugiat ipsum
        Lorem culpa eu sunt. Ex veniam ipsum in esse incididunt.
      </p>

      <p>
        Qui ad dolore do aliquip aliqua labore consectetur nulla. Aliquip enim
        mollit dolore ex deserunt pariatur quis do enim in dolore in. Excepteur
        consectetur nostrud occaecat velit velit dolore laboris labore irure
        velit et aliqua. Tempor culpa magna ullamco est nostrud fugiat nulla
        irure quis id adipisicing amet. Aliquip officia reprehenderit consequat
        aliquip in minim ullamco incididunt irure minim culpa veniam
        consectetur. Ad aliqua ex ex et ea aliqua elit reprehenderit. Eu
        exercitation culpa commodo ex ullamco ullamco laborum in consectetur.
        Officia veniam ullamco deserunt duis proident non mollit pariatur enim
        duis. Ea adipisicing occaecat velit labore enim consectetur enim laborum
        voluptate proident. Cillum nulla aute minim voluptate velit fugiat ipsum
        Lorem culpa eu sunt. Ex veniam ipsum in esse incididunt.
      </p>

      <Footer title={"시험 응시"} />
    </div>
  );
}

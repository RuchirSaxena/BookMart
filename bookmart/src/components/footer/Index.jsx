import React from "react";
import "./Index.css";
const Index = () => {
  return (
    <div class="container-fluid  w-100 footer">
      <footer class="bg-dark text-center text-lg-start text-white">
        <div class="container-fluid p-4">
          <div class="row mt-4">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0 	">
              <h5 class="text-uppercase">See other books</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-book fa-fw fa-sm me-2"></i>Bestsellers
                </li>
                <li>
                  <i class="fas fa-book fa-fw fa-sm me-2"></i>All books
                </li>
                <li>
                  <i class="fas fa-user-edit fa-fw fa-sm me-2"></i>Our authors
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0 execution-div">
              <h5 class="text-uppercase">Execution of the contract</h5>

              <ul class="list-unstyled">
                <li>
                  <i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>
                  Supply
                </li>
                <li>
                  <i class="fas fa-backspace fa-fw fa-sm me-2"></i>Returns
                </li>
                <li>
                  <i class="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy policy
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0 company-div">
              <h5 class="text-uppercase">FEATURES</h5>

              <ul class="list-unstyled">
                <li>Buy</li>
                <li>Sell</li>
                <li>Great Prices</li>
  
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Write to us</h5>

              <ul class="list-unstyled">
                <li>
                  <i class="fas fa-at fa-fw fa-sm me-2"></i>Help in purchasing
                </li>
                <li>
                  <i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Check the
                  order status
                </li>
                <li>
                  <i class="fas fa-envelope fa-fw fa-sm me-2"></i>Join the
                  newsletter
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a class="text-white" href="">
            bookmart.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;

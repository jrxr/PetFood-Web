import Header from "../../components/header";
import './styles.css';

const Checkout = () => {
  return (
    <div className="h-100">
      <Header hideCart />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                  // onChange={(e) => setShippingValue("zipcode", e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                  // onChange={(e) => setShippingValue("city", e.target.value)}
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                  // onChange={(e) => setShippingValue("street", e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <input
                  type="number"
                  placeholder="Numero"
                  className="form-control form-control-lg"
                  // onChange={(e) =>
                  //   setShippingValue("street_number", e.target.value)
                  // }
                />
              </div>
              <div className="col-5 pl-0">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                  // onChange={(e) =>
                  //   setShippingValue("neighborhood", e.target.value)
                  // }
                />
              </div>
              <div className="col-2 pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                  // onChange={(e) => setShippingValue("state", e.target.value)}
                />
              </div>
            </div>

            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  className="form-control form-control-lg"
                  // onChange={(e) =>
                  //   setTransaction({
                  //     ...transaction,
                  //     card_number: e.target.value,
                  //   })
                  // }
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Nome do titular"
                  className="form-control form-control-lg"
                  // onChange={(e) =>
                  //   setTransaction({
                  //     ...transaction,
                  //     card_holder_name: e.target.value,
                  //   })
                  // }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                  // onChange={(e) =>
                  //   setTransaction({
                  //     ...transaction,
                  //     card_expiration_date: e.target.value,
                  //   })
                  // }
                />
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                  // onChange={(e) =>
                  //   setTransaction({ ...transaction, card_cvv: e.target.value })
                  // }
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 mb-4 d-flex justify-content-between align-items-center total">
                <b>Total:</b>
                <h3>R$ 79.90</h3>
              </div>
              <div className="col-12">
                <button
                  type="button"
                  // onClick={() => makePurchase()}
                  className="btn btn-block btn-lg btn-primary w-100"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="box col mb-4 box-sidebar">
              <h4>Minha Sacola  </h4>

              <div className="row products">
                {/* {cart.map((p) => (
                  <Product produto={p} />
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

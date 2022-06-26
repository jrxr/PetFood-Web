const Product = () => {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfWowepdc4JvHpDx5gcjwVbt80YtlKh7zRPX4XXTrpdqsWdW1Xh3r8AX9N_fWnJIxbCSEYXoalNA&usqp=CAc"
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <small>
            <b>Nome do Produto</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

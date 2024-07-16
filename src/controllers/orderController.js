const Order = require("../models/order");
const orders = []; // Simulation d'une base de données en mémoire

exports.selectProducts = (req, res) => {
  const { headgear, tops, bottoms, shoes } = req.body;
  const selectedProducts = [
    { category: "Couvre-chef", item: headgear },
    { category: "Hauts", item: tops },
    { category: "Bas", item: bottoms },
    { category: "Chaussures", item: shoes },
  ].filter((product) => product.item !== "none");

  req.session.selectedProducts = selectedProducts;
  res.redirect("/orderReview.html");
};

exports.reviewOrder = (req, res) => {
  const selectedProducts = req.session.selectedProducts;
  let productList = selectedProducts
    .map((product) => `<li>${product.category}: ${product.item}</li>`)
    .join("");

  let html = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Révision de la Commande</title>
        </head>
        <body>
            <h1>Révision de la Commande</h1>
            <div id="orderSummary">
                <ul>
                    ${productList}
                </ul>
            </div>
            <form action="/confirmOrder" method="post">
                <input type="submit" value="Confirmer la Commande">
            </form>
        </body>
        </html>
    `;
  res.send(html);
};

exports.confirmOrder = (req, res) => {
  const memberId = req.session.memberId || 1; // pour l'exemple, utilisation de l'ID 1
  const selectedProducts = req.session.selectedProducts;
  const newOrder = new Order(memberId, selectedProducts);

  orders.push(newOrder);
  req.session.orderId = newOrder.id;
  res.redirect("/orderConfirmation.html");
};

exports.orderConfirmation = (req, res) => {
  const orderId = req.session.orderId;
  const order = orders.find((o) => o.id === orderId);

  let itemList = order.items
    .map((item) => `<li>${item.category}: ${item.item}</li>`)
    .join("");

  let html = `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <title>Confirmation de la Commande</title>
        </head>
        <body>
            <h1>Confirmation de la Commande</h1>
            <div id="orderDetails">
                <p>Commande ID: ${order.id}</p>
                <ul>
                    ${itemList}
                </ul>
                <p>Total: ${order.total} €</p>
            </div>
        </body>
        </html>
    `;
  res.send(html);
};

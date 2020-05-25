(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{418:function(a,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"dealing-with-multisig-addresses-and-transactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-multisig-addresses-and-transactions"}},[a._v("#")]),a._v(" Dealing with Multisig addresses and transactions")]),a._v(" "),s("p",[a._v("Multisignature (often called multisig) is a form of technology used to add additional security for cryptocurrency transactions. Multisignature addresses require another user or users sign a transaction before it can be broadcast onto the block chain. "),s("em",[a._v("(Source: Wikipedia)")])]),a._v(" "),s("p",[a._v("In this short guide, we will demonstrate the creation and usage of a "),s("code",[a._v("2of2")]),a._v(" multisignature wallet. We'll use 2 nodes and the Komodo chain. On a Komodo assetchain, follow the same steps but add the "),s("code",[a._v("-ac_name=COIN")]),a._v(" parameter.")]),a._v(" "),s("p",[a._v("There are various tools you can use for "),s("code",[a._v("multisig")]),a._v(" including Agama. Check the "),s("RouterLink",{attrs:{to:"/komodo/multisig-transactions-on-komodo-or-assetchains.html#related-materials"}},[a._v("related materials section")]),a._v(" at the end of this guide for links.")],1),a._v(" "),s("h2",{attrs:{id:"step-1-get-new-addresses-corresponding-pubkeys-and-privkeys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-get-new-addresses-corresponding-pubkeys-and-privkeys"}},[a._v("#")]),a._v(" Step 1 - Get new addresses, corresponding pubkeys and privkeys")]),a._v(" "),s("p",[a._v("First, let's create addresses on the two nodes. Then we will combine them into a single multisig address. We will also need the pubkey and privkey (WIF) for each address:")]),a._v(" "),s("h3",{attrs:{id:"node-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-1"}},[a._v("#")]),a._v(" Node 1")]),a._v(" "),s("h4",{attrs:{id:"generate-a-new-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-new-address"}},[a._v("#")]),a._v(" Generate a new address")]),a._v(" "),s("p",[a._v("Command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli getnewaddress\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5\n")])])]),s("h4",{attrs:{id:"get-the-pubkey-value-using-validateaddress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-pubkey-value-using-validateaddress"}},[a._v("#")]),a._v(" Get the pubkey value using "),s("code",[a._v("validateaddress")])]),a._v(" "),s("p",[a._v("Command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli validateaddress RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"isvalid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scriptPubKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"76a91431a8cbc716e21238079729d46cb655ae7fadc9e388ac"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"segid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("37")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"ismine"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"iswatchonly"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"isscript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"pubkey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"02dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a26"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"iscompressed"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"account"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"get-the-private-key-wif"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-private-key-wif"}},[a._v("#")]),a._v(" Get the private key (WIF)")]),a._v(" "),s("p",[a._v("Command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli dumpprivkey RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("UrunDGyFJu5UFZG7BnFx9R6iaPmWaBX8iqHzRpFRjNp8kBEQYKNt\n")])])]),s("h4",{attrs:{id:"to-summarise-data-from-node-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-summarise-data-from-node-1"}},[a._v("#")]),a._v(" To summarise data from Node 1")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("address: RDomQ4tftJGjcHBVpAUx549jZfxtJx74r5\npubkey:  02dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a26\nprivkey: UrunDGyFJu5UFZG7BnFx9R6iaPmWaBX8iqHzRpFRjNp8kBEQYKNt\n")])])]),s("h3",{attrs:{id:"node-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-2"}},[a._v("#")]),a._v(" Node 2")]),a._v(" "),s("p",[a._v("On a different node, follow the same steps to generate new address, validate and export the private key.")]),a._v(" "),s("h4",{attrs:{id:"generate-new-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate-new-address"}},[a._v("#")]),a._v(" Generate new address")]),a._v(" "),s("p",[a._v("Command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli getnewaddress\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("RBqZ6nHcANekX3zxF9y4zRyfB6X8VEWF7s\n")])])]),s("h4",{attrs:{id:"get-pubkey-value-using-validateaddress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-pubkey-value-using-validateaddress"}},[a._v("#")]),a._v(" Get pubkey value using "),s("code",[a._v("validateaddress")])]),a._v(" "),s("p",[a._v("Command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli validateaddress RBqZ6nHcANekX3zxF9y4zRyfB6X8VEWF7s\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"isvalid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RBqZ6nHcANekX3zxF9y4zRyfB6X8VEWF7s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scriptPubKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"76a9141c0f1c482d38c43bb847506a527521d2204afe6588ac"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"segid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("38")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"ismine"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"iswatchonly"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"isscript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"pubkey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a2816"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"iscompressed"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"account"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h4",{attrs:{id:"get-the-private-key-wif-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-private-key-wif-2"}},[a._v("#")]),a._v(" Get the private key (WIF)")]),a._v(" "),s("p",[a._v("Command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli dumpprivkey RBqZ6nHcANekX3zxF9y4zRyfB6X8VEWF7s\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("UsuE7jG8BD1CV2xuCoBCwgzzbs4HqZ2P2im5fdyJmP2tSd3arAv7\n")])])]),s("h4",{attrs:{id:"to-summarise-data-from-node-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-summarise-data-from-node-2"}},[a._v("#")]),a._v(" To summarise data from Node 2")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("address: RBqZ6nHcANekX3zxF9y4zRyfB6X8VEWF7s\npubkey:  032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a2816\nprivkey: UsuE7jG8BD1CV2xuCoBCwgzzbs4HqZ2P2im5fdyJmP2tSd3arAv7\n")])])]),s("h2",{attrs:{id:"step-2-create-multisig-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-multisig-address"}},[a._v("#")]),a._v(" Step 2 - Create multisig Address")]),a._v(" "),s("p",[a._v("Now we can combine pubkeys to create a multisig ("),s("code",[a._v("2of2")]),a._v(" in this example) address. You can execute the following command on any node. The command will output the "),s("code",[a._v("redeemScript")]),a._v(" which is required to spend funds.")]),a._v(" "),s("p",[a._v("Command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli createmultisig "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'["02dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a26","032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a2816"]\'')]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bEP3HK73CboW8tGN8obyHUQteBzYjFzgNm"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"redeemScript"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652ae"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"step-3-fund-the-multisig-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-fund-the-multisig-address"}},[a._v("#")]),a._v(" Step 3 - Fund the multisig address")]),a._v(" "),s("p",[a._v("Let's fund our multisig address. You can send funds from any source.")]),a._v(" "),s("p",[a._v("Command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli sendtoaddress bEP3HK73CboW8tGN8obyHUQteBzYjFzgNm "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7.77")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("194fea388c5474ae25d261d8c57213b79f9a111e774caeea066f796ddd99e81c\n")])])]),s("h2",{attrs:{id:"step-4-create-rawtransaction-to-spend-funds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-4-create-rawtransaction-to-spend-funds"}},[a._v("#")]),a._v(" Step 4 - Create rawtransaction to spend funds")]),a._v(" "),s("p",[a._v("Now let's spend funds from the multisig address. We need to create a rawtransaction first. As inputs, we are using the unspent vout of the transaction through which the multisig address was funded. As the destination address, we use the address to which we want to send the funds.")]),a._v(" "),s("p",[a._v("Please note that in this example, we are sending the whole deposited funds back, but in the case where you don't want to send all the amount, you have to manually specify a second (change) output. Because, by default the difference between inputs and outputs is counted as miner fee. Most probably you'll get the "),s("code",[a._v("AcceptToMemoryPool: absurdly high fees")]),a._v(" error because of this reason. (This type of transaction can be allowed by using an additional parameter to the "),s("code",[a._v("sendrawtransaction")]),a._v(" method set to "),s("code",[a._v("true")]),a._v(" which actually sets "),s("code",[a._v("allowhighfees=true")]),a._v(", but it is very unlikely that you want to do it).")]),a._v(" "),s("p",[a._v("Command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli createrawtransaction "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'[{"txid":"194fea388c5474ae25d261d8c57213b79f9a111e774caeea066f796ddd99e81c","vout":1}]\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{\"RP81MSVu39QgXhGDHfnk9d9KMnp4vhEVBu\":7.77}'")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f190100000000ffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000\n")])])]),s("h2",{attrs:{id:"step-5-sign-the-rawtransaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-5-sign-the-rawtransaction"}},[a._v("#")]),a._v(" Step 5 - Sign the rawtransaction")]),a._v(" "),s("p",[a._v("You need to sign the raw transaction using both nodes to be able to broadcast & spend.")]),a._v(" "),s("h3",{attrs:{id:"node-1-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-1-2"}},[a._v("#")]),a._v(" Node 1")]),a._v(" "),s("p",[a._v("Command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli signrawtransaction "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f190100000000ffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'[{"txid":"194fea388c5474ae25d261d8c57213b79f9a111e774caeea066f796ddd99e81c","vout":1,"scriptPubKey":"a914121cbc7a828772bd4612bc7b9765cbbf13d0b3cc87","redeemScript":"522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652ae","amount":7.77}]\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[\"UrunDGyFJu5UFZG7BnFx9R6iaPmWaBX8iqHzRpFRjNp8kBEQYKNt\"]'")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"hex"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f19010000009200483045022100a5f4bdf5b61a4f4baf0b5b48f69488b8f752e36cbac23ec0c762bba99552ac9e022036e658c7c8c19ec4bd423fcc6a109a811b189311fc874dd466e58a1755ef4e940147522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652aeffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"complete"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"errors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"txid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"194fea388c5474ae25d261d8c57213b79f9a111e774caeea066f796ddd99e81c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"vout"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scriptSig"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"00483045022100a5f4bdf5b61a4f4baf0b5b48f69488b8f752e36cbac23ec0c762bba99552ac9e022036e658c7c8c19ec4bd423fcc6a109a811b189311fc874dd466e58a1755ef4e940147522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652ae"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"sequence"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4294967295")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Operation not valid with the current stack size"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"node-2-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-2-2"}},[a._v("#")]),a._v(" Node 2")]),a._v(" "),s("p",[a._v("Use the HEX value obtained from Node 1's signature output and change the privkey to Node 2's privkey.")]),a._v(" "),s("p",[a._v("Comamnd:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli signrawtransaction "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f19010000009200483045022100a5f4bdf5b61a4f4baf0b5b48f69488b8f752e36cbac23ec0c762bba99552ac9e022036e658c7c8c19ec4bd423fcc6a109a811b189311fc874dd466e58a1755ef4e940147522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652aeffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'[{"txid":"194fea388c5474ae25d261d8c57213b79f9a111e774caeea066f796ddd99e81c","vout":1,"scriptPubKey":"a914121cbc7a828772bd4612bc7b9765cbbf13d0b3cc87","redeemScript":"522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652ae","amount":7.77}]\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[\"UsuE7jG8BD1CV2xuCoBCwgzzbs4HqZ2P2im5fdyJmP2tSd3arAv7\"]'")]),a._v("\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"hex"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f1901000000da00483045022100a5f4bdf5b61a4f4baf0b5b48f69488b8f752e36cbac23ec0c762bba99552ac9e022036e658c7c8c19ec4bd423fcc6a109a811b189311fc874dd466e58a1755ef4e940147304402200abc8c1e1e26090a7012df8859a3986229da34b0edd82c42a64efc8b89390e6702202582cbdce3de13fe59196228d4d0a6a80916e23ccb343f1cf32515688a938ebb0147522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652aeffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"complete"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("We need to broadcast the above raw HEX to finish sending our transaction.")]),a._v(" "),s("h2",{attrs:{id:"step-6-broadcast-the-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-6-broadcast-the-transaction"}},[a._v("#")]),a._v(" Step 6 - Broadcast the transaction")]),a._v(" "),s("p",[a._v("Finally we are ready to broadcast our multisig transaction:")]),a._v(" "),s("p",[a._v("Command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("./komodo-cli sendrawtransaction 0400008085202f89011ce899dd6d796f06eaae4c771e119a9fb71372c5d861d225ae74548c38ea4f1901000000da00483045022100a5f4bdf5b61a4f4baf0b5b48f69488b8f752e36cbac23ec0c762bba99552ac9e022036e658c7c8c19ec4bd423fcc6a109a811b189311fc874dd466e58a1755ef4e940147304402200abc8c1e1e26090a7012df8859a3986229da34b0edd82c42a64efc8b89390e6702202582cbdce3de13fe59196228d4d0a6a80916e23ccb343f1cf32515688a938ebb0147522102dd22c272504af79b220ba37c12f777596eff4f54598e2db65be325a9393a3a2621032a73cd31fb86150c33f26312b665c21e5f9391829f29cf48aca03bbb4f9a281652aeffffffff014014502e000000001976a91497d5106d5f69619803eb8d72a2bf45a4f033338a88ac00000000a80000000000000000000000000000\n")])])]),s("p",[a._v("Output:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("23c2aaaf458ada3f171ee5d274e8dcfc91b62099ec15e4b2d02da2b2d1172cb1\n")])])]),s("p",[a._v("Where "),s("code",[a._v("23c2aaaf458ada3f171ee5d274e8dcfc91b62099ec15e4b2d02da2b2d1172cb1")]),a._v(" is the output transaction id which you can use in an explorer or similar places to verify the transaction.")]),a._v(" "),s("h3",{attrs:{id:"related-materials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-materials"}},[a._v("#")]),a._v(" Related Materials")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://medium.com/@decker.komodo/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%B5%D0%B9-multisig-%D0%B2-komodo-9d8f8c48da52",target:"_blank",rel:"noopener noreferrer"}},[a._v("Detailed Article in Russian Language"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://deckersu.github.io/coinbin/#newMultiSig",target:"_blank",rel:"noopener noreferrer"}},[a._v("Multisig Web Tool"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://komodoplatform.com/komodo-wallets",target:"_blank",rel:"noopener noreferrer"}},[a._v("Agama Download"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://support.komodoplatform.com/en/support/solutions/articles/29000027745-create-sign-and-send-a-multi-sig-transaction",target:"_blank",rel:"noopener noreferrer"}},[a._v("Agama MultiSig Guide"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{468:function(a,s,t){"use strict";t.r(s);var n=t(0),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"useful-commands-for-komodo-notary-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#useful-commands-for-komodo-notary-node"}},[a._v("#")]),a._v(" Useful commands for Komodo Notary Node")]),a._v(" "),t("p",[a._v("Store "),t("code",[a._v("komodo-cli")]),a._v(" into "),t("code",[a._v("/usr/bin")]),a._v(", so you can use it anywhere you are in the CLI")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" ~/komodo/src/komodo-cli /usr/bin\n")])])]),t("p",[a._v("Stop Komodo, Bitcoin and Iguana at once")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("komodo-cli stop "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" bitcoin-cli stop "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pkill")]),a._v(" -15 iguana\n")])])]),t("p",[a._v("Update Komodo (be sure to stop Komodo first, see above)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/komodo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" src "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])])]),t("p",[a._v("Search for a specific pubkey in files (like: notaries.c, ratify(A,B,C)_7776 etc. etc.)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("**notaries.c**\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/SuperNET/iguana\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" notaries.c "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 0209d48554768dd8dada988b98aca23405057ac4b5b46838a9378b95c3e79b9b9e "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("or any pubkey of course"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n**ratify"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("A,B,C"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("_7776**\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/SuperNET/iguana/tests\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" ratifyA_7776 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 0209d48554768dd8dada988b98aca23405057ac4b5b46838a9378b95c3e79b9b9e "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("or any pubkey of course"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("If you want to copy your full bitcoin blocks to a new node instead of downloading it again you can scp the files to the new node. THIS WILL TAKE A WHILE!")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/.bitcoin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" -r blocks/ chainstate/ user@ipofnewnode:~/.bitcoin\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
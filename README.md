# ng-bootstrap-modals

- the examples on using modals in official docs of ng-bootstrap are great, but they leave out some use-cases that are common in real-life situations.

- the following examples are included:
    + `modal-built-in` is the standard example in the ng-bootstrap documentation. the modal component and template are in the same ts file (and html usually). I consider this the quick and dirty way.
    + `sep-comp-template` separates the modal component as its own, that you call from another component. However, the modal component does not utilize templateURL but rather has the template written in the ts file. I have this here because its the only way I've found to do this with ngx-bootstrap, but its not friendly to work with the html this way.
    + `sep-comp-template-url` is in my opinion the best way, and the most "angular" way. its also an advantage of ng-bootstrap over ngx-bootstrap. the modal is a separate component with its own html file.
    + `proxy-modal/nested-comp` this is an alternative way, that may work with ngx-boostrap. Essentially, you can call a modal, and the template of that modal simple renders another component (which is your content). This keeps your modal's template clean, if you are unable to use templateURL instead.

- note: I've also read that it may be possible to use templateURL in ngx-bootstrap if its path is a 'full-path'. But I'm not sure full-path from where (from index.html?), and I havent tried it.  

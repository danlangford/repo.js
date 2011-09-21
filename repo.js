window.repo = window.repo || (function() {
    
    var repo = {catalog:{},add:undefined,list:undefined,load:undefined,script:undefined,log:undefined};
    
    repo.add = function(data) {
        var _catalog = data.catalog;
        for (var i = 0, n = _catalog.length; i<n; i++) {
            var _entry = _catalog[i];
            repo.catalog[_entry.name] = _entry;
            //
            repo.log('added: '+_entry.name +' @ '+ _entry.url);
        }
        return "entries added to catalog: "+n;
    };
    
    repo.list = function(){
        var n=0;
        for (var i in repo.catalog) {
            n++;
            var _entry = repo.catalog[i];
            repo.log('lib: '+_entry.name +' @ '+ _entry.url);
        }
        return "total entries in catalog: "+ n;
    };
    
    repo.load = function(lib) {
        if(repo.catalog[lib] !== undefined) {
            return repo.script(repo.catalog[lib].url);
        } else {
            return "undefined lib";
        }
    };
    
    repo.script = function(url){
        console.log("trying to load: "+url);
        var _head = document.getElementsByTagName('head')[0];
        var _script = document.createElement('script');
        _script.type = 'text/javascript';
        _script.src = url;
        _head.appendChild(_script);
        return 'loaded ' + url;
    };

    // TODO investigate FF firebug lite issue
    // these logs dont appear in FirebugLite in Firefox
    // but they do appear in FirebugLite in Chrome
    repo.log = function() {
        if(console !== undefined && console.log !== undefined) {
            console.log.apply(console,arguments)
        }
    }

    return repo;
    
})();
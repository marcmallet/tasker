
class Pagination{

    constructor(limit,total,page,max_pages){

        this.limit              = limit;
        this.total              = total;
        this.page               = parseInt(page) === 0 ? 1 : parseInt(page);
        this.max_pages          = max_pages;

        this.tmpURL             = window.location.href
        this.tmpURLQueries      = window.location.search
        this.url                = this.tmpURL.replace(this.tmpURLQueries, "");
    }


    renderNext() {

        if (this.total === 0)
            return false;

        if (this.page < this.max_pages) {
            //return `<a href="`+this.url+`?page=`+(this.page + 1)+`" onclick="setPage(this.page + 1)" class="pagi-btn-next"><i class="fas fa-chevron-right"></i></a>`;
            return `<a href="javascript:void(0)" onclick="gotoNextPage()" class="pagi-btn-next"><i class="fas fa-chevron-right"></i></a>`;
        } else {
            return `<a href="javascript:void(0)" class="pagi-btn-next-disabled"><i class="fas fa-chevron-right"></i></a>`;
        }
    }

    renderPrevious() {

        if (this.total === 0)
            return false;

        if (this.page > 2) {
            //return ` <a href="`+this.url+`?page=`+(this.page - 1)+`" class="pagi-btn-previous"><i class="fas fa-chevron-left"></i></a>`;
            return ` <a href="javascript:void(0)" onclick="gotoPreviousPage()" class="pagi-btn-previous"><i class="fas fa-chevron-left"></i></a>`;
        }
        else if (this.page === 2) {
            //return ` <a href="`+this.url+`" class="pagi-btn-previous"><i class="fas fa-chevron-left"></i></a>`;
            return ` <a href="javascript:void(0)" onclick="gotoRootPage()"  class="pagi-btn-previous"><i class="fas fa-chevron-left"></i></a>`;
        }
        else {
            return `<a href="javascript:void(0)" class="pagi-btn-previous-disabled"><i class="fas fa-chevron-left"></i></a>`;
        }
    }

    render() {
        if(this.limit < this.total)
        {
            return this.page+' - '+this.max_pages+' &nbsp;&nbsp;&nbsp;'+this.renderPrevious()+this.renderNext();
        }
    }


















}